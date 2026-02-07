export {};

function fetchUserData() {
  try {
    // Simulating API response
    const response = '{"id":1,"name":"Manoj"}';

    const data = JSON.parse(response); // can throw error
    console.log(data.name);
  } catch (error) {
    console.log("Something went wrong while fetching user");
  }
}

fetchUserData();
