type Handler<T> = () => T | Promise<T>;

const withErrorHandler = <T>(handler: Handler<T>) => async (): Promise<T> => {
  try {
    return await handler();
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export default withErrorHandler;
