export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  address: {
    city: string;
    street: string;
  };
}

export interface RegisterResponse {
  status: string;
  data: {
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      token: string;
      address: {
        city: string;
        street: string;
      };
    };
  };
}
