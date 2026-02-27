
export interface IAddress {
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface IUser {

  userName: string;
  userId: string;
  userRole: string;
  profileDescription: string;
  profileImage: string;
  skills: string[];
  experienceYears: number;
  isActive: boolean;
  address: {
    current: IAddress;
    permanent: IAddress;
  };
}



export type tuser = 'candidate' | 'admin'