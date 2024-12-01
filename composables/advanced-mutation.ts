import { useToast } from '@/components/toast';
import type { DefaultError, QueryClient, MutationOptions } from '@tanstack/vue-query';

type AdvancedMutationOptions<TData, TError, TVariables, TContext> = MutationOptions<
  TData,
  TError,
  TVariables,
  TContext
> & {
  errorKey?: string;
  successKey?: string;
};

export const useAdvancedMutation = <
  TData = unknown,
  TError extends Error = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  {
    errorKey = 'There was an error, please try again later',
    successKey,
    ...mutationOptions
  }: AdvancedMutationOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient
) => {
  const { toast } = useToast();

  return useMutation(
    {
      ...mutationOptions,
      mutationFn: mutationOptions.mutationFn,
      onError: (error, variables, context) => {
        toast({
          title: 'Error!',
          description: errorKey ?? error.toString(),
          variant: 'error',
        });

        if (mutationOptions.onError) {
          mutationOptions.onError(error, variables, context);
        }
      },
      onSuccess: (data, variables, context) => {
        if (successKey) {
          toast({ title: successKey });
        }

        if (mutationOptions.onSuccess) {
          mutationOptions.onSuccess(data, variables, context);
        }
      },
    },
    queryClient
  );
};
