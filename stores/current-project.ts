import { ProjectsController } from '@/lib/controllers';

import type { Simplify } from 'type-fest';
import type { Tables } from '@/types/database';
import type { DiagramConfig, Table } from '@/types/diagram';

export const useCurrentProject = defineStore('current-project', () => {
  const state = ref<Tables<'projects'> | null>(null);
  const saved = ref(true);

  const projectsApi = useApiController(ProjectsController);

  const fetch = async (id: number) => {
    try {
      state.value = await projectsApi.getById(id);
      return true;
    } catch {
      return false;
    }
  };

  const updateDiagramConfig = async (payload: Partial<DiagramConfig>) => {
    if (!state.value) return;

    state.value.schema = {
      ...state.value.schema,
      ...payload,
    };
  };

  const updateTableData = async (id: string, payload: Partial<Table>) => {
    if (!state.value) return;

    const table = state.value.schema.tables.find((table) => {
      return table.id === id;
    });

    if (!table) return;

    for (const [key, value] of Object.entries(payload)) {
      type Key = Simplify<keyof Table>;
      (table[key as Key] as Table[Key]) = value;
    }
  };

  const reset = () => {
    state.value = null;
    saved.value = true;
  };

  const saveConfigToDatabase = async () => {
    if (!state.value || saved.value) return;

    state.value.last_modified_at = new Date().toISOString();

    await projectsApi.update(state.value.id, {
      last_modified_at: state.value.last_modified_at,
      name: state.value.name,
      schema: state.value.schema,
      thumbnail: state.value.thumbnail,
      visibility: state.value.visibility,
    });

    saved.value = true;
  };

  watch(
    state,
    (currentValue, previousValue) => {
      if (!currentValue || !previousValue) return;
      saved.value = false;
    },
    { deep: true }
  );

  return {
    state,
    saved,
    fetch,
    updateDiagramConfig,
    updateTableData,
    reset,
    saveConfigToDatabase,
  };
});
