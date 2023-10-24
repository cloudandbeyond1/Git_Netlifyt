import PropTypes from "prop-types";
import clsx from "clsx";
import {
  getIndividualCategories,
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import "../../assets/css/shopnew.css";
const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);

  return (
    <div className={clsx("sidebar-style", sideSpaceClass)}>
      {/* shop search */}
      <ShopSearch />
      <div class="single_banner mt-50" style={{ marginBottom: "50px"}}>
          <div class="banner_thumb single-banner-2">
               <a href="shop.html"><img src="/assets/img/program/offer.png" alt="Rezingo"/></a>
                        </div>
                    </div>

      {/* filter by categories */}
      <ShopCategories
        categories={uniqueCategories}
        getSortParams={getSortParams}
      />


















      

      {/* filter by color */}
      {/* <ShopColor colors={uniqueColors} getSortParams={getSortParams} /> */}

      {/* filter by size */}
      {/* <ShopSize sizes={uniqueSizes} getSortParams={getSortParams} /> */}

      {/* filter by tag */}
      {/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
