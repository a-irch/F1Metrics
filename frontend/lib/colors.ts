const constructorColors: Record<string, string> = {
    "mclaren" : "#F47600",
    "redbull" : "#4781D7",
    "ferrari" : "#ED1131",
    "mercedes" : "#00D7B6",
    "alpine" : "#00A1E8",
    "sauber" : "#01C00E",
    "aston_martin" : "#007A33",
    "williams" : "#1868DB",
    "haas" : "#9C9FA2",
    "rb" : "#6C98FF"
};



const getConstructorColor = (id: string): string => {
    return constructorColors[id as keyof typeof constructorColors] || "#6B7280";
};

export default getConstructorColor;