import './index.css'

function ListCard({ children }) {
    return (
        <>
            <div className='container-list'>

                {children}

            </div>
        </>
    );
}

export { ListCard };