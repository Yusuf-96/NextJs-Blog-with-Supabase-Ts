export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          updated_at: string | null;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
        }; // The data expected to be returned from a "select" statement.
        Insert: {
          id: string;
          created_at: string | null;
          tittle: string | null;
          desc: string | null;
        }; // The data expected passed to an "insert" statement.
        Update: {
          id: string;
          updated_at: string | null;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
        }; // The data expected passed to an "update" statement.
      };
    };
  };
}

export interface IPost {
  id?: number;
  tittle: string;
  desc: string;
  created_at?: Date;
}
