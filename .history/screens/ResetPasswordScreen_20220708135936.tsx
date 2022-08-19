import { Text } from "@ui-kitten/components";
import { Screen } from "../components/Screen";

export const ResetPasswordScreen = ({route,}
    : 
  { 
   route: { params: { token: string }}
}) => {
    return(
        <Screen>
            <Text>ResetPassword</Text>
        </Screen>
    )
}