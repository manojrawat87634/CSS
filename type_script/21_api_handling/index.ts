export {};

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiError = {
  success: false;
  message: string;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type User = {
  id: number;
  name: string;
  email: string;
};

export async function fetchUser(
  userId: number
): Promise<ApiResponse<User>> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Failed to fetch user",
      };
    }

    const data: User = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "Unknown error occurred",
    };
  }
}

async function main() {
  const result = await fetchUser(1);

  if (result.success) {
    console.log("User Name:", result.data.name);
    console.log("Email:", result.data.email);
  } else {
    console.error("Error:", result.message);
  }
}

main();