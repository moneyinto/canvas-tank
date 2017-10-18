export class Config {
    public screenWidth = 512;
    public screenHeight = 448;

    public stageCtx;

    /**************声音资源*****************/
    public START_AUDIO = new Audio('assets/audio/start.mp3');
    public BULLET_DESTROY_AUDIO = new Audio('assets/audio/bulletCrack.mp3');
    public TANK_DESTROY_AUDIO = new Audio('assets/audio/tankCrack.mp3');
    public PLAYER_DESTROY_AUDIO = new Audio('assets/audio/playerCrack.mp3');
    public MOVE_AUDIO = new Audio('assets/audio/move.mp3');
    public ATTACK_AUDIO = new Audio('assets/audio/attack.mp3');
    public PROP_AUDIO = new Audio('assets/audio/prop.mp3');

    /**************游戏状态*****************/
    public GAME_STATE_MENU = 0;
    public GAME_STATE_INIT = 1;
    public GAME_STATE_START = 2;
    public GAME_STATE_OVER = 3;
    public GAME_STATE_WIN = 4;

    /**************地图块*****************/
    public WALL = 1;
    public GRID = 2;
    public GRASS = 3;
    public WATER = 4;
    public ICE = 5;
    public HOME = 9;
    public ANOTHREHOME = 8;

    /**************坦克及子弹的四个方向*****************/
    public UP = 0;
    public DOWN = 1;
    public LEFT = 2;
    public RIGHT = 3;

    /**************坦克及子弹的四个方向*****************/
    public ENEMY_LOCATION = [192,0,384]; //相对与主游戏区

    /**************子弹类型*****************/
    public BULLET_TYPE_PLAYER = 1;
    public BULLET_TYPE_ENEMY = 2;
    /**************爆炸类型****************/
    public CRACK_TYPE_TANK = 'tank';
    public CRACK_TYPE_BULLET = 'bullet';
}
