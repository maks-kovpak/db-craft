<script lang="ts" setup>
  import { ProjectsController } from '@/lib/controllers';

  const route = useRoute();
  const projectsApi = useApiController(ProjectsController);

  const projectId = computed(() => {
    return Number(typeof route.params.id === 'string' ? route.params.id : route.params.id[0]);
  });

  // TODO: throw error if the project with provided ID doesn't exist
  const { data, suspense } = useQuery({
    queryKey: ['project', projectId.value],
    queryFn: async () => {
      return await projectsApi.getById(projectId.value);
    },
  });

  onServerPrefetch(async () => {
    await suspense();
  });
</script>

<template>
  <div>Diagram: {{ JSON.stringify(data) }}</div>
</template>
