export const badRequest = (error: Error) => ({
  statusCode: 400,
  data: { error: error.message },
});

export const ok = (data: { [key:string]: any }) => ({
  statusCode: 200,
  data,
});

export const redirect = (data: { redirectTo: string, [key:string]: any }) => ({
  statusCode: 301,
  data,
});

export const serverError = () => {
  const error = new Error('Internal server error, please try again in a few seconds, if it persists please contact us');

  return {
    statusCode: 500,
    data: { error: error.message },
  };
};
