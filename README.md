```latex
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{graphicx}
\usepackage{url}
\usepackage{hyperref}
\title{Asistente Legal}
\author{Henning Gruhl}
\date{April 2023}

\begin{document}

\maketitle

\section{Introduction}
Asistente Legal is a web application that allows users to receive legal assistance through a conversational interface. Users can submit their questions, and the system will provide relevant information based on the query. The project is hosted on GitHub and consists of a frontend built with React and a backend built with Flask.

\section{Frontend}
The frontend is built using the React JavaScript library and Material-UI components. The user interface includes a chat-like interface where users can submit their queries and receive responses from the system.

\subsection{Dashboard Component}
The main component in the frontend is the Dashboard component. It includes a TextField for user input and a Paper component for displaying the chat history. The user can submit their query by pressing the enter icon or the return key. The input is sent to the backend, and the received response is displayed in the chat container.

\section{Backend}
The backend is built using the Flask web framework and is responsible for processing user queries and returning relevant information. It includes the following directory structure:

\begin{verbatim}
backend/
  ├─ app/
  │   ├─ api/
  │   │   ├─ __init__.py
  │   │   ├─ auth.py
  │   │   └─ legal_document.py
  │   ├─ models/
  │   │   ├─ __init__.py
  │   │   └─ user.py
  │   ├─ utils/
  │   │   ├─ __init__.py
  │   │   └─ langchain.py
  │   ├─ __init__.py
  │   └─ config.py
  ├─ migrations/
  ├─ tests/
  ├─ venv/
  ├─ .env
  ├─ .gitignore
  ├─ requirements.txt
  └─ run.py
\end{verbatim}

\subsection{API}
The backend includes a REST API for handling user queries. The API has an endpoint for processing legal documents, which receives the user's input and returns relevant information.

\subsection{LangChain Processor}
The LangChain Processor is responsible for processing the user's query and fetching relevant information from a pre-trained language model. It uses the Pinecone vector store for similarity search and the OpenAI API for generating responses.

\section{Usage}
To use the Asistente Legal web application, visit the hosted URL and enter your query in the provided input field. After submitting your query, the system will process it and return a relevant response, which will be displayed in the chat container.

\section{Code Repository}
The source code for Asistente Legal can be found on GitHub at the following URL:

\url{https://github.com/HenningGC/asistente-legal}

\end{document}
```
