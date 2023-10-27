import cors from 'cors';
import nextConnect

const corsOptions = {
  origin: '*', // Define o origin como * para permitir todas as origens
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

const middleware = nextConnect();

middleware.use(cors(corsOptions));

export default middleware;