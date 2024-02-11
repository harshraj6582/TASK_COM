interface UserIdPageProps {
    params : {
        userID  : string ;
    };
};

const Page = ({
    params , 
}: UserIdPageProps) => {
    return (
        <div>
            USer ID is {params.userID}
        </div>
    )
}

export default Page ; 