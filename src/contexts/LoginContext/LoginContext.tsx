import {
  useState,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import instance from "../../services/http/patika/instance";
import { ContextType, StateType } from "./types";

const initialState: StateType = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
};

export const LoginContext = createContext<ContextType>({
  //contextin ulaşabildiği statelerin neler olacağını ve yapacagını burada belirliyoruz
  login: () => null,
  logout: () => null,
  state: initialState,
});

export const LoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);

  useEffect(() => {
    instance.interceptors.request.use((config) => {
      const _config = { ...config };
      _config.headers = {
        ...config.headers,
        authorization: "Bearer " + state.token,
      };
      return _config;
    });

    // instance.interceptors.response.use(
    //   (response) => {return response},
    //   (error) => {
    //     if ([500, 401, 403].includes(error.response.status)) {
    //       //hata anında direk login ekranına yönlendirmesi için
    //       setState((prev) => ({
    //         ...prev,
    //         isLoggedIn: false,
    //         token: "",
    //         username: "",
    //       }));
    //     }
    //   }
    // );
  }, [state.token]);

  const login = (token: string, username: string) => {
    setState({
      username,
      token,
      isLoggedIn: true,
    });

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setState({
      username: "",
      token: "",
      isLoggedIn: false,
    });
    localStorage.setItem("token", "");
    localStorage.setItem("username", "");
  };

  return (
    <LoginContext.Provider
      value={{ login: login, logout: logout, state: state }}
    >
      {" "}
      {children}{" "}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const { state, login, logout } = useContext(LoginContext);
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    login,
    logout,
  };
};
