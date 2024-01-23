FROM mongo:4

# Expor a porta do MongoDB
EXPOSE $MONGO_REPLICA_PORT

# Iniciar o MongoDB em modo de conjunto de réplicas e realizar configurações iniciais
ENTRYPOINT mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 & MONGOD_PID=$!; \
  # Preparar o conjunto de réplicas com um único nó e configurar o usuário root
INIT_REPL_CMD="rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })"; \
INIT_USER_CMD="db.getUser('$MONGO_INITDB_ROOT_USERNAME') || db.createUser({ user:'$MONGO_INITDB_ROOT_USERNAME', pwd:'$MONGO_INITDB_ROOT_PASSWORD', roles: [ 'root' ] })"; \
# Esperar até que o conjunto de réplicas esteja pronto e, em seguida, executar os comandos acima
until (mongo admin --port $MONGO_REPLICA_PORT --eval "$INIT_REPL_CMD && $INIT_USER_CMD"); do sleep 1; done; \
# Sinalizar que o conjunto de réplicas está online e aguardar sinais do processo mongod
echo "REPLICA SET ONLINE"; wait $MONGOD_PID;
