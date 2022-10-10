import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { card } from "../../services/http/patika/endpoints/card";
import { ContextType, StateType } from "./types";

export const initialState: StateType = {
  list: [],
  card: [],
};

export const BoardContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
});

export const BoardProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<StateType>(initialState);
  const dispatches: ContextType["dispatches"] = () => {};

  useEffect(() => {
    card.get().then((card) => {
      setState((prev) => ({
        ...prev,
        card: { ...prev.card, card },
      }));
    });
  }, []);

  dispatches.addList = (list: any) => {
    setState((prev) => ({
      ...prev,
      list: { ...prev.list, list },
    }));
  };

  dispatches.addCard = (card: any) => {
    setState((prev) => ({
      ...prev,
      card: { ...prev.card, card },
    }));
  };



  return (
    <BoardContext.Provider value={{ state, dispatches }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  return useContext(BoardContext);
};
