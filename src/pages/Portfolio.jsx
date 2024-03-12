import { FaMagnifyingGlass } from "react-icons/fa6";
import { forwardRef, useState, useEffect } from 'react';
import Modal from '../components/Modal';
import ReactPaginate from 'react-paginate';
import GridLoader from "react-spinners/GridLoader";
import { motion } from 'framer-motion';

const Portfolio = (props, ref) => {
    const [modal, setModal] = useState(false);
    const [modalIndex, setModalIndex] = useState();
    const [categoryName, setCategoryName] = useState("web");
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const loaderStyle = {
        display: "block",
        margin: "0 auto"
    }
    const modalHandler = (e, id) => {
        e.preventDefault();
        setModal(!modal);
        setModalIndex(id);
    } 

    const [portfData, setPortfData] = useState([]);


    const handleCategory = async (category, index) => {
        
        setItemOffset(0);
        setCurrentPage(0);

        const prevActiveNavItem= activeNavItem;
        setActiveNavItem(index);

        setCategoryName(category);

        if(prevActiveNavItem !== null && prevActiveNavItem !== index) {
            document.getElementById(`navItem${prevActiveNavItem}`).classList.remove('active');
        }
        if(activeNavItem === null) {
            document.getElementById(`navItem0`).classList.add('active');
            setActiveNavItem(0);
        }

        const loadingTimeout = setTimeout(() => {
            setLoading(true);
        }, 1000);

        try {
            const response = await fetch(`/src/data/${category}.json`);
            const data = await response.json();
            setPortfData(data);
            setLoading(false);
            clearTimeout(loadingTimeout);
        } catch(err) {
            console.error("Error fetching data:", err);
        }
    }

    useEffect( () => {
        handleCategory(categoryName);
    }, []);
    

    /**************  react-paginate */
    const itemsPerPage = 6;

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    //useful when you change to another category and you want to reset the selected page number
    const [currentPage, setCurrentPage] = useState(0);
    
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = portfData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(portfData.length / itemsPerPage);
    
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % portfData.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setCurrentPage(event.selected);

    };
    /**************  end react-paginate */

    return (
        <motion.section
            id="portfolio"
            variants={props.mainVariant}
            initial="hidden"
            animate={props.animateControl} 
            ref= {ref} 
            className="flex container mx-auto flex-col"
        >
            <motion.h2
                variants={props.childVariant}
                className="w-full text-center font-bold text-3xl"
            >Portfolio
            </motion.h2>  
            <motion.div
                variants={props.childVariant}
                className="mt-5"
            >
                <ul className="category flex justify-center gap-6 flex-wrap">
                    <li id="navItem0" onClick={() => handleCategory("web", 0)} className={`${0 === activeNavItem ? 'active' : ''} cursor-pointer hover:border-b-2`}>Web Development</li>
                    <li id="navItem1" onClick={() => handleCategory("email", 1)} className={`${1 === activeNavItem ? 'active' : ''} cursor-pointer hover:border-b-2`}>Email Creatives</li>
                    <li id="navItem2" onClick={() => handleCategory("insertc", 2)} className={`${2 === activeNavItem ? 'active' : ''} cursor-pointer hover:border-b-2`}>Insert Cards</li>
                    <li id="navItem3" onClick={() => handleCategory("infog", 3)} className={`${3 === activeNavItem ? 'active' : ''} cursor-pointer hover:border-b-2`}>Infographics Design</li>
                    <li id="navItem4" onClick={() => handleCategory("misc", 4)} className={`${4 === activeNavItem ? 'active' : ''} cursor-pointer hover:border-b-2`}>Miscellaneous</li>
                </ul>
            </motion.div>
            <div className="mt-10 flex gap-10 flex-col lg:flex-row flex-wrap">
                {loading === false ? (
                    currentItems && currentItems.map( (value, key) => {
                        return (
                            <div key={key} className="flex flex-col mx-auto w-2/3 lg:w-1/3">
                                <figure className="relative">
                                    <img src={`./src/assets/portfolio-${categoryName}-img${value.id}.jpg` || `./src/assets/portfolio-${categoryName}-img${value.id}.png`} alt="" loading="lazy" className="rounded-xl object-cover object-top w-full h-52 brightness-75"/>
                                    <figcaption className="absolute w-full top-0 bottom-0 rounded-xl hover:bg-green-400 hover:bg-opacity-70">
                                        <i className="absolute top-1/4 mt-5 left-0 right-0 w-full text-2xl"><FaMagnifyingGlass className="mx-auto"/></i>
                                        <h5 className="absolute top-1/4 mt-14 text-center w-full bg-black/75 p-2">{value.title}</h5> 
                                        <a href="#" onClick={(e) => {modalHandler(e, value.id)}}  className="absolute top-0 bottom-0 w-full"></a>                   
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                ) : (
                    <GridLoader
                        color="#49ff49"
                        // loading={loading}
                        speedMultiplier={0.8}
                        cssOverride={loaderStyle}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                )}
            </div> 
            {modal &&
            <div className="relative container mx-auto">
                <Modal
                    modalToggle={setModal}
                    modalState={modal}
                    index={modalIndex}
                    portfData={portfData[modalIndex]} 
                    categoryName={categoryName}
                />
            </div>
            }
            { !loading &&<div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    forcePage={currentPage}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                /></div>
            }
        </motion.section>
    )
}

export default forwardRef(Portfolio);