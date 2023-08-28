import { ReactNode, createContext, useState } from "react";

type userId = {
  userUid: string;
  setUserUid: React.Dispatch<React.SetStateAction<string>>;
};

export const context = createContext<userId | null>(null);

type Props = {
  children: ReactNode;
};

export function UserProvider(props: Props) {
  const [userUid, setUserUid] = useState("");

  return (
    <context.Provider value={{ userUid, setUserUid }}>
      {props.children}
    </context.Provider>
  );
}
