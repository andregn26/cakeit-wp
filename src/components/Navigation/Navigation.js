import React from "react"
import { NavigationWrapper } from "./Navigation.styles"
import { Link } from "gatsby"

const Navigation = ({ menu }) => {
  console.log("the one --->", menu)

  return (
    <NavigationWrapper>
      <ul>
        {menu.map(mainItem =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <Link to={mainItem.url} activeClassName="nav-active">
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </Link>
              {mainItem.childItems.nodes.length !== 0 ? (
                <ul>
                  {mainItem.childItems.nodes.map(childItem => (
                    <li key={childItem.id}>
                      <Link to={childItem.url} activeClassName="nav-active">
                        {childItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
