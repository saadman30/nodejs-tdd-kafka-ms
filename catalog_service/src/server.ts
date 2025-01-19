import expressApp from "./expressApp";

const PORT = process.env.PORT || 8000;

export const startServer = async () => {
  expressApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on("uncaughtException", async (error) => {
    console.log(error);
    process.exit(1);
  });
};

startServer()
  .then(() => {
    console.log("Server started");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
