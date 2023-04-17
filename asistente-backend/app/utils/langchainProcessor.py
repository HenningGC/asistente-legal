from langchain.document_loaders import UnstructuredPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Chroma, Pinecone
import pinecone
import os
import pickle


def process_query(query):
    
    pinecone_api_key = os.environ.get("PINECONE_API_KEY")
    pinecone_environment = os.environ.get("PINECONE_ENVIRONMENT")
    openai_api_key = os.environ.get("OPENAI_API_KEY")

    pinecone.init(
        api_key=pinecone_api_key,
        environemnt=pinecone_environment
    )
    index_name = "YOURINDEXNAMEHERE"

    # open embeddings_penal pkl with open
    #embeddings = pickle.load(open("embeddings_penal.pkl", "rb"))
    with open(r"asistente-backend\app\utils\embeddings_penal.pkl", "rb") as f:
        embeddings = pickle.load(f)

    from langchain.llms import OpenAI
    from langchain.chains.question_answering import load_qa_chain

    llm = OpenAI(temperature=0, openai_api_key=openai_api_key)
    chain = load_qa_chain(llm, chain_type="stuff")

    docs = Pinecone.from_existing_index(index_name, embeddings).similarity_search(query, include_metadata=True)
    result = chain.run(input_documents=docs, question=query)
    return result


