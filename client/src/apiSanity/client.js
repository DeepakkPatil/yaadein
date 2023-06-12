import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "ntq3og62",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk92IEUrjykj3GjOPUGBwxmrNoDPK4otaVp28TjhH0hy3QaKr30fjcFrefJU0dhyar9AWMRGTKxcZCuXKCc5HWah82yoCy9jTw9qENWUtstye56IgZUHj8i8HkbZVmajW1O3CKuARgR8mfG5JywC8YtePd4GawstRObFbg1nClTNL9j5vruW",
});
// will add this token and project id in .env after clone is done

