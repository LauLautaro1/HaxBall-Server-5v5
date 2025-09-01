const HaxballJS = require('haxball.js');

HaxballJS().then((HBInit) => {
    const room = HBInit({
        roomName: '⚽ SERVER EN FASE DE DESARROLLO 🥸​ - NO ENTRAR',
        maxPlayers: 10,
        public: true,
        noPlayer: true,
        token: "thr1.AAAAAGi1RXMua2jubc8q2g.hlTQwBU7LIY"
    });

    // Configuración inicial
    room.setScoreLimit(1);
    room.setTimeLimit(3);
    room.setTeamsLock(true);
    room.setCustomStadium(
        '{"name":"Futsal 5x5","width":900,"height":404,"spawnDistance":310,"bg":{"type":"hockey","width":793,"height":346,"kickOffRadius":95,"cornerRadius":0},"vertexes":[{"x":-793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-95,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":0,"y":404,"trait":"kickOffBarrier"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"line"},{"x":0,"y":-404,"trait":"kickOffBarrier"},{"x":-821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":-95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":821,"y":95,"bCoef":0.1,"cMask":["ball"],"trait":"goalNet"},{"x":-793,"y":-271,"trait":"line"},{"x":-572,"y":-50,"trait":"line"},{"x":793,"y":-271,"trait":"line"},{"x":572,"y":-50,"trait":"line"},{"x":-793,"y":271,"trait":"line"},{"x":-572,"y":50,"trait":"line"},{"x":793,"y":271,"trait":"line"},{"x":572,"y":50,"trait":"line"},{"x":793,"y":346,"bCoef":1,"trait":"ballArea"},{"x":793,"y":-346,"bCoef":1,"trait":"ballArea"},{"x":0,"y":346,"bCoef":0,"trait":"line"},{"x":0,"y":-346,"bCoef":0,"trait":"line"},{"x":0,"y":95,"trait":"kickOffBarrier"},{"x":0,"y":-95,"trait":"kickOffBarrier"},{"x":802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":-98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":-346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":-802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":-802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":802,"y":98,"bCoef":1,"cMask":["ball"],"trait":"line"},{"x":802,"y":346,"bCoef":1,"cMask":["ball"],"trait":"ballArea"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":180,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":9,"v1":10,"curve":-180,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"v0":2,"v1":12,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":6,"v1":13,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":-95},{"v0":1,"v1":14,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":5,"v1":15,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","y":95},{"v0":12,"v1":14,"curve":-35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":-821},{"v0":13,"v1":15,"curve":35,"vis":true,"color":"FFFFFF","bCoef":0.1,"cMask":["ball"],"trait":"goalNet","x":585},{"v0":16,"v1":17,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":18,"v1":19,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":20,"v1":21,"curve":-90,"color":"FFFFFF","trait":"line"},{"v0":22,"v1":23,"curve":90,"color":"FFFFFF","trait":"line"},{"v0":17,"v1":21,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":-600},{"v0":19,"v1":23,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","x":572},{"v0":1,"v1":0,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":5,"v1":4,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":2,"v1":3,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-665},{"v0":6,"v1":7,"vis":true,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":665},{"v0":0,"v1":24,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":290},{"v0":3,"v1":25,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","y":-290},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":10,"v1":9,"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":29,"v1":28,"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":2,"v1":1,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":6,"v1":5,"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line"},{"v0":30,"v1":31,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614},{"v0":32,"v1":33,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":34,"v1":35,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-614},{"v0":36,"v1":37,"vis":false,"color":"FFFFFF","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":614}],"goals":[{"p0":[-802,-95],"p1":[-802,95],"team":"red"},{"p0":[802,95],"p1":[802,-95],"team":"blue"}],"discs":[{"radius":5,"pos":[-793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[-793,-95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,95],"color":"FFFFFF","trait":"goalPost"},{"radius":5,"pos":[793,-95],"color":"FFFFFF","trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-346,"trait":"ballArea"},{"normal":[0,-1],"dist":-346,"trait":"ballArea"},{"normal":[0,1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-404,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-900,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.1,"kickStrength":7},"ballPhysics":{"radius":6.4,"color":"EAFF00"}}'
    )

    let gameCountdown = null;
    let isGameActive = false;

    room.onPlayerJoin = function(player) {
        console.log(`👤 ${player.name} se unió a la sala`);
        
        room.sendChat(`¡Bienvenido ${player.name}!`);

        // Asignar equipo automáticamente
        assignAutoTeam(player);

        autoBalanceTeams();

        checkAutoStart();
    };

    room.onPlayerLeave = function(player) {
        console.log(`👋 ${player.name} abandonó la sala`);
        room.sendChat(`¡Hasta luego ${player.name}!`);
        
        autoBalanceTeams();
    };

    room.onTeamGoal = function(team) {
        const teamName = team === 1 ? "🔴 Rojo" : "🔵 Azul";
        console.log(`⚽ Gol del equipo ${teamName}`);
        room.sendChat(`¡GOOOL del equipo ${teamName}!`);
    };

    room.onGameStart = function() {
        console.log(`🎮 Partida iniciada`);
        room.sendChat(`¡PARTIDA INICIADA! ¡Buena suerte!`);
        isGameActive = true;
    };

    room.onGameStop = function() {
        console.log(`⏹️ Partida terminada`);
        room.sendChat(`Partida terminada. Preparando nueva partida...`);
        isGameActive = false;
        
        // Mezclar equipos y preparar siguiente partida
        setTimeout(() => {
            mixTeamsAndPrepareNextGame();
        }, 1000);
    };

    // Función para asignar equipo automáticamente
    function assignAutoTeam(player) {
        const players = room.getPlayerList().filter(p => p.team !== 0);
        const redTeam = players.filter(p => p.team === 1);
        const blueTeam = players.filter(p => p.team === 2);
        
        if (redTeam.length <= blueTeam.length) {
            room.setPlayerTeam(player.id, 1);
            room.sendChat(`${player.name} asignado al equipo 🔴 Rojo`);
        } else {
            room.setPlayerTeam(player.id, 2);
            room.sendChat(`${player.name} asignado al equipo 🔵 Azul`);
        }

    }

    // Función para mezclar todos los equipos
    function mixAllTeams() {
        allEspecter();
        const players = room.getPlayerList();
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }

        var currentTeam = 1;
        players.forEach((player) => {
            room.setPlayerTeam(player.id, currentTeam);
            
            if(currentTeam === 1){
                currentTeam = 2;
            }else{
                currentTeam = 1;
            }

            console.log(`🎲 ${player.name} ha sido mezclado en los equipos!`);
            room.sendChat(`🎲 ${player.name} ha sido mezclado en los equipos!`);
        });

    }

    function allEspecter() {
        const players = room.getPlayerList();
        players.forEach(player => {
            room.setPlayerTeam(player.id, 0);
        });
        console.log("👁️ Todos los jugadores han sido espectadores.");
        room.sendChat("👁️ Todos los jugadores han sido espectadores.");
    }

    // Verificar si podemos iniciar automáticamente
    function checkAutoStart() {
        const players = room.getPlayerList().filter(p => p.team !== 0);
        
        // Si hay al menos 2 jugadores y no hay juego activo
        if (players.length >= 0 && !isGameActive) {
            startGameCountdown();
        }
    }

    // Iniciar cuenta regresiva para empezar
    function startGameCountdown() {
        // Cancelar countdown anterior si existe
        if (gameCountdown) {
            clearTimeout(gameCountdown);
        }
        
        let countdown = 1;
        room.sendChat(`⏰ Partida iniciando en ${countdown} segundos...`);
        
        gameCountdown = setInterval(() => {
            countdown--;
            
            if (countdown > 0) {
                room.sendChat(`⏰ ${countdown}...`);
            } else {
                clearInterval(gameCountdown);
                gameCountdown = null;
                
                // Verificar que todavía hay suficientes jugadores
                const players = room.getPlayerList().filter(p => p.team !== 0);
                if (players.length >= 1) {
                    room.startGame();
                }
            }
        }, 1000);
    }

    // Preparar siguiente partida después de terminar
    function mixTeamsAndPrepareNextGame() {
        // Mezclar equipos aleatoriamente
        mixAllTeams();
        
        // Verificar si podemos iniciar nueva partida
        checkAutoStart();
    }

    room.onGameTick = function() {
        if (!isGameActive) return;
    };

    // Función de auto-balanceo
    function autoBalanceTeams() {
        const players = room.getPlayerList().filter(p => p.team !== 0);
        const redTeam = players.filter(p => p.team === 1);
        const blueTeam = players.filter(p => p.team === 2);
        
        const difference = Math.abs(redTeam.length - blueTeam.length);
        
        if (difference > 1) {
            room.sendChat("⚖️ Auto-balanceando equipos...");
            
            if (redTeam.length > blueTeam.length) {
                // Mover jugador de rojo a azul
                const playerToMove = redTeam[0];
                room.setPlayerTeam(playerToMove.id, 2);
            } else {
                // Mover jugador de azul a rojo
                const playerToMove = blueTeam[0];
                room.setPlayerTeam(playerToMove.id, 1);
            }
        }
    }
    // Datos de login (puedes poner más de uno si quieres)
    const admins = {
        "BELLAVISTA": "ADMIN", // usuario: contraseña
    };

    // Escuchar los chats de los jugadores
    room.onPlayerChat = function(player, message) {
        if (message.startsWith("!login")) {
            const args = message.split(" ");

            if (args.length < 3) {
                room.sendChat("❌ Uso correcto: !login <usuario> <contraseña>", player.id);
                return false; // evita que salga en el chat
            }

            const username = args[1];
            const password = args[2];

            if (admins[username] && admins[username] === password) {
                room.setPlayerAdmin(player.id, true);
                room.sendChat(`✅ Bienvenido ${username}, ahora eres administrador.`);
            } else {
                room.sendChat("❌ Usuario o contraseña incorrectos.", player.id);
            }

            return false; // evita que el comando salga en el chat
        }

        return true; // otros mensajes se muestran normalmente
    };


    console.log("✅ Servidor automático iniciado correctamente!");

}).catch(error => {
    console.error("❌ Error al iniciar el servidor:", error);
});