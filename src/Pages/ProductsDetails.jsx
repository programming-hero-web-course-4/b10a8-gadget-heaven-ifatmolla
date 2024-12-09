import { Link, useNavigate, useParams } from "react-router-dom";
import items from "../Data/Data";
import Header from "../Components/Main/Header";
import ProductsDeatailsBanner from "../Components/ProductsDeatailsBanner";
import { FaRegHeart } from "react-icons/fa6";
const ProductsDetails = () => {
    let navigate = useNavigate();
    let { productId } = useParams();
    const product = items.find(item => item.product_id === productId)

    console.log(product)
    const AddToChart = () => {

        const olditems = JSON.parse(localStorage.getItem('chartList') || "[]")
        olditems.push(product)
        localStorage.setItem('chartList', JSON.stringify(olditems));
        location.reload()

    }


    const AddToChart2 = () => {

        const olditems = JSON.parse(localStorage.getItem('WhishList') || "[]")
        olditems.push(product)
        localStorage.setItem('WhishList', JSON.stringify(olditems));
        location.reload()
    }
    return (
        <>
            <Header></Header>
            <ProductsDeatailsBanner></ProductsDeatailsBanner>
            <div className=" bg-slate-200 flex space-x-5 justify-center w-9/12  mx-auto">
                <div className="mr-36">
                    <img className="" src={product.product_image} alt="" />
                    
                </div>
                <div className="space-y-4">

                    <p className="text-3xl font-bold text-black ">{product.product_title}</p>
                    <h1 className="text-2xl font-semibold">price:${product.price}</h1>
                    <button className=" border  border-teal-400 bg-teal-100 p-1 px-5 rounded-full">In Stock</button>
                    <h2>{product.specification}</h2>
                    <h1 className="text-xl font-bold">Specification:</h1>
                    <div>
                        {
                            product.specification.map((item, index) => <p key={index}>{index + 1} {item} </p>)
                        }
                    </div>
                    <div className="flex ">
                        <div className="rating">
                            <input type="radio" name="rating-2" defaultChecked={1 == Math.floor(product.rating)} className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked={2 == Math.floor(product.rating)} />
                            <input type="radio" name="rating-2" defaultChecked={3 == Math.floor(product.rating)} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" defaultChecked={4 == Math.floor(product.rating)} className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" defaultChecked={5 == Math.floor(product.rating)} className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <button className="bg-gray-400 p-1">{product.rating}</button>
                    </div>

                    <div className="flex">
                        <button className="bg-violet-800 py-5 px-24 rounded-full text-center" onClick={AddToChart}>Add to Card</button>
                        {/* <button className="  py-5 px-24 rounded-full btn btn-success" onClick={AddToChart2} >WishList</button> */}
                        <FaRegHeart className="text-6xl ml-7" onClick={AddToChart2} />
                    </div>


                </div>
            </div>
        </>
    );
};

export default ProductsDetails;



