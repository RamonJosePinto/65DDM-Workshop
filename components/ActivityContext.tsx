import React, {createContext, useContext, useState, ReactNode} from "react";

interface Activity {
    id: number;
    name: string;
}

interface ActivityContextType {
    activities: Activity[];
    addActivity: (name: string) => void;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export const useActivity = () => {
    const context = useContext(ActivityContext);
    if (!context) {
        throw new Error("useActivity deve ser usado dentro de um ActivityProvider");
    }
    return context;
};

export const ActivityProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    const addActivity = (name: string) => {
        const newActivity = {id: activities.length + 1, name};
        setActivities([...activities, newActivity]);
    };

    return <ActivityContext.Provider value={{activities, addActivity}}>{children}</ActivityContext.Provider>;
};
