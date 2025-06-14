import Wrapper from "../Wrapper";
import PackageCard from "../PackageCard";
import SectionText from "../SectionText";

const TourCategory = ({ tours, params, title }) => {
  return (
    <div className="py-10">
      <div
        style={{
          backgroundImage: `url("/bg-image.png")`,
        }}
        className="bg-[#f1f6ff] bg-right-bottom bg-no-repeat bg-auto pb-10"
      >
        <Wrapper>
          <SectionText title={`${title || ""} tour packages`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tours.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              tours.map((item) => (
                <div key={item.id}>
                  <PackageCard item={item} params={params} />
                </div>
              ))
            )}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default TourCategory;