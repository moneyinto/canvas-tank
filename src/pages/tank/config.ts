export class Config {
    public screenWidth = 512;
    public screenHeight = 448;

    public stageCtx;

    public POS = {};

    /**************按键*****************/
    public KEY_UP = 38;
	public KEY_DOWN = 40;
	public KEY_RIGHT = 39;
    public KEY_LEFT = 37;
    public KEY_ENTER = 13;

    /**************图片资源*****************/
    public MENU_IMAGE = new Image();
    public RESOURCE_IMAGE = new Image();

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

    constructor() {
        this.MENU_IMAGE.src = 'assets/img/menu.gif';
        this.RESOURCE_IMAGE.src = 'assets/img/tankAll.gif';

        this.POS['selectTank'] = [128,96];
        this.POS['stageLevel'] = [396,96];
        this.POS['num'] = [256,96];
        this.POS['map'] = [0,96];
        this.POS['home'] = [256,0];
        this.POS['score'] = [0,112];
        this.POS['player'] = [0,0];
        this.POS['protected'] = [160,96];
        this.POS['enemyBefore'] = [256,32];
        this.POS['enemy1'] = [0,32];
        this.POS['enemy2'] = [128,32];
        this.POS['enemy3'] = [0,64];
        this.POS['bullet'] = [80,96];
        this.POS['tankBomb'] = [0,160];
        this.POS['bulletBomb'] = [320,0];
        this.POS['over'] = [384,64];
        this.POS['prop'] = [256,110];
    }
}
