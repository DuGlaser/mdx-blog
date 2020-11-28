export const config = {
  meta: {
    title: '永遠にWIP',
  },
  root:
    process.env.NODE_ENV === 'production'
      ? 'https://duglaser.dev'
      : 'http://localhost:3000',
};
