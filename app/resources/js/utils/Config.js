const Config = {

    DEFAULT_ARRAY_SIZE : 15,
    DEFAULT_MAX_VALUE : 40,
    DEFAULT_SPEED_IN_MS: 1000,

    MODE_BASELINE: "base",
    MODE_SPEED: "speed", 
    MODE_DATA: "data",
    MODE_STEPTHROUGH: "step-through",

    BUBBLESORT: "bubble-sort",
    INSERTIONSORT: "insertion-sort", 
    SELECTIONSORT: "selection-sort",


    SETTING_RANDOM: 0,
    SETTING_NEARLY_SORTED: 1,
    SETTING_SORTED: 2,


};

Object.freeze(Config);

export default Config;