import { AuthContext } from "./AuthContext";

interface Props {
    children: React.ReactNode;
    state: { 
      logged: boolean,
      email: string,
      name: string
    }
  }
export const AuthProvider = ({ children, state }: Props) => {
  return (
    <AuthContext.Provider value={{...state}}>
        {children}
    </AuthContext.Provider>
  )
}
