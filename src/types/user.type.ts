export type TTokenUser = {
          id: string;
          name?: string;
          email: string;
          role: string;
          exp?: number;
          iat?: number;
};

export type TUser = {
          _id: string;
          name: string;
          email: string;
          role: string;
          profileImage: string;
          createdAt: string;
          updatedAt: string;
};