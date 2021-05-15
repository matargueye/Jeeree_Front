export interface Client {

  id?: number;
  prenom: string;
  nom: string;
  password: string;
  username: string;
  role?: string;
  isActive?: boolean;
  adresse_client: string;
  tel_client: string;
}
