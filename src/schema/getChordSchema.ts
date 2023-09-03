const { z } = require("zod");

exports.getChordSchema = z
  .object({
    artist: z
      .string({
        required_error: "Artista inválido",
        invalid_type_error: "Artista inválido",
      })
      .trim(),
    music: z
      .string({
        required_error: "musica inválida",
        invalid_type_error: "musica inválida",
      })
      .trim(),
  })
  .strict();
