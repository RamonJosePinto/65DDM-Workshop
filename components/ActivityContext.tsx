// app/components/ActivityContext.tsx
import React, {createContext, useContext, useState, ReactNode} from "react";

// Definindo o tipo de uma atividade
interface Activity {
    id: number;
    name: string;
}

// Definindo o tipo para o contexto
interface ActivityContextType {
    activities: Activity[];
    addActivity: (name: string) => void;
}

// Criando o contexto
const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

// Criando um hook para usar o contexto de atividade
export const useActivity = () => {
    const context = useContext(ActivityContext);
    if (!context) {
        throw new Error("useActivity deve ser usado dentro de um ActivityProvider");
    }
    return context;
};

// Componente provedor para fornecer o contexto às telas
export const ActivityProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    // Função para adicionar uma nova atividade
    const addActivity = (name: string) => {
        const newActivity = {id: activities.length + 1, name};
        setActivities([...activities, newActivity]);
    };

    return <ActivityContext.Provider value={{activities, addActivity}}>{children}</ActivityContext.Provider>;
};
