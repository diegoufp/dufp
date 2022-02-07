import { useQuery ,gql} from "@apollo/client";



const NAV_LANG = gql`
query Query($lang: Lang!) {
    findNavLang(lang: $lang) {
      _id
      nav {
        home
        skills
        portfolio
        contact
        lang
      }
    }
  }
`;

const Header = () => {
    const {data,error,loading} = useQuery(NAV_LANG, {variables: {lang: "es"}});
    console.log(data)
    return (
        <header className="bg-red">
            header
        </header>
    )
}

export default Header;
