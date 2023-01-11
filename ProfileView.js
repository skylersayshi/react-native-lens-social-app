import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function ProfileView({
    route, navigation
}) {
    return (
        <Profile
            profile={route.params.profile}
            onFollowersPress={
                profile => {
                    console.log("Profile: ", profile)
                    navigation.push("ViewFollowing", {
                        ethereumAddress: profile.ownedBy
                    })
                }
            }
            onProfileImagePress={
                publication => {
                    navigation.push("ViewProfile", {
                        profile: publication.profile
                    })
                }
            }
            onCommentPress={
                publication => {
                    const publicationId = publication.mirrorOf ? publication.mirrorOf.id : publication.id
                    navigation.push('ViewComments', {
                        publicationId
                    })
                }
            }
        />
    )
};