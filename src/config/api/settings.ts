// Por ahora, luego esto se debe cambiar (luego = 1 dia)

const settings: ISettings = {
    funcUrl: "#{func_url}#",
    searchKey: "#{search_key}#",
    searchUrl: "#{search_url}#",
    searchIndex: "#{search_index}#",
    url: "#{url}#",
};

const localSettings: ISettings = {
    funcUrl: "http://localhost:7071/api",
    searchKey: "12268FC09D35D2983B697D5025219A60",
    searchUrl: "https://agrosearch.search.windows.net",
    searchIndex: "entities",
    url: "",
};

export type Entidad = "entities";

export interface ISettings {
    funcUrl: string;
    searchUrl: string;
    searchKey: string;
    searchIndex: string;
    url: string;
}

export { settings, localSettings };
