import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Layout from '../components/Layout';
import ComponentSVG from '../components/ComponentSVG';
import useFetch from '../hooks/useFetch';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
  },
};


export default function HomePage() {
    
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f60';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const {data, loading, error} = useFetch('test.json');


    return (
      <>
      <Layout>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Details</h2>
        <button onClick={closeModal}><ComponentSVG variant="close" size="16px" color="black" /></button>
        <p>I am a modal</p>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        <h1>Home page</h1>
    <button onClick={openModal}>Open Modal</button>

    {loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
    </Layout>
      </>
    );
  }