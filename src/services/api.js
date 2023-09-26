function clarifaiRequest(url) {
  const PAT = import.meta.env.VITE_PAT;
  const USER_ID = import.meta.env.VITE_USER_ID;
  const APP_ID = import.meta.env.VITE_APP_ID;
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
