import { client } from "./client";

export const UploadData = async (props) => {
  const user = props.user;
  const imgSrc = props.imgSrc;
  const expressionScore = props.expressionScore;

  // Check if user with given uId exists in Sanity
  client.fetch(`*[_type == "user" && uId == "${user.result.googleId}"]`).then((result) => {
    if (result.length > 0) {
      // User exists, add new data object to existing document
      const existingUser = result[0];
      const newData = {
        _key: `${Date.now()}`,
        image: { imgSrc },
        expressions: expressionScore,
      };
      const patchedUser = Object.assign({}, existingUser, {
        data: [...existingUser.data, newData],
      });
      client
        .patch(existingUser._id)
        .set(patchedUser)
        .commit()
        .then((response) => {
          console.log("Object patched successfully: ", response);
          alert("Data added to existing user successfully");
        })
        .catch((error) => {
          console.error("Error patching object: ", error);
          alert("Unable to add data to existing user");
        });
    } else {
      // User does not exist, create a new document
      client
        .create({
          _type: "user",
          uId: user.result.googleId,
          name: user.result.email,
          data: [
            {
              _key: `${Date.now()}`,
              image: { imgSrc },
              expressions: expressionScore,
            },
          ],
        })
        .then((response) => {
          console.log("Object created successfully: ", response);
          alert("Data added to new user successfully");
        })
        .catch((error) => {
          console.error("Error creating object: ", error);
          alert("Unable to create new user");
        });
    }
  });
};



export const getData = async (props) => {
  const user = props.user;

  try {
    const result = await client.fetch(`*[_type == "user" && uId == "${user.result.googleId}"]`);
    
    if (result.length > 0) {
      const response = await result[0].json();
      return response;
    } else {
      // User does not exist, create a new document
    }
  } catch (error) {
    // Handle error
  }
};



