export const KEYS = {
    ALBUMS: 'ALBUMS'
};

export const save = async (key, item) => {
    await localStorage.setItem(key, item);
}

export const load = async (key) => await localStorage.getItem(key);