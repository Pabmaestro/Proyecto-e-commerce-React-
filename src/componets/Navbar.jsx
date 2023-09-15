import ButtonMenu from "./ButtonMenu"
import CartConteiner from "./CartConteiner"
import CategoryItems from "./CategoryItems"
import Brand from "./brand"

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-warning-subtle">
        <div className="container-fluid">
          <Brand/>
          <ButtonMenu/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CategoryItems isActive={true} name="Desayunos"/>
              </li>
              <li className="nav-item">
              <CategoryItems isActive={true} name="Meriendas"/>
              </li>
              <li className="nav-item">
              <CategoryItems isActive={true} name="Almuerzo"/>
              </li>
            </ul>
          </div>
          <CartConteiner />
        </div>
      </nav>
    )
}


export default Navbar;