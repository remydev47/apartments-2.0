
export const HeaderLogistics = () => {
    return(
        <Row style={{ alignItems: "center", 
            justifyContent: "space-between", 
            marginHorizontal: LISTMARGIN, marginVertical: 5}}
        >
          <Row>
            <MaterialCommunityIcons name="map-marker" size={24} color={theme["color-primary-500"]} />
            <Text category={"c1"} appearance={"hint"}>12 Available</Text>
            <TouchableOpacity
              onPress={() => console.log("save")}
            >
              <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                Save
              </Text>
            </TouchableOpacity>
          </Row>
          <Row>
             <TouchableOpacity onPress={() => console.log("sort")}>
              <Row style={{ alignItems: "center"}}>
                 <MaterialCommunityIcons name="sort" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                    Sort
                  </Text>
              </Row>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("map")}>
              <Row style={{ alignItems: "center", marginLeft: 20 }}>
                 <MaterialCommunityIcons name="map-outline" size={24} color={theme["color-info-300"]} />
                 <Text category={"c1"} style={{ fontWeight: "bold",marginLeft: 5, color: theme["color-info-300"]}}>
                    Map
                  </Text>
              </Row>
            </TouchableOpacity>
          </Row>
        </Row>
    )
}