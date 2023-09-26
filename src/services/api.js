function clarifaiRequest(url) {
  const PAT = "67900a5135eb4d568e18a99946e5825f";
  const USER_ID = "zakhar_vd";
  const APP_ID = "my-first-application";
  // const MODEL_ID = 'color-recognition';
  const IMAGE_URL = url;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
}

export async function makeClarifaiRequest(imageUrl) {
  const response = await fetch(
    `https://api.clarifai.com/v2/models/color-recognition/outputs`,
    clarifaiRequest(imageUrl)
  );
  if (response.status !== 200) {
    return new Error("fetch error");
  } else {
    const result = await response.json();
    return result;
  }
}
