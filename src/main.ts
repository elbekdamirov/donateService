import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle("Donation")
      .setDescription("API documentation for Donation App")
      .setVersion("1.0")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
