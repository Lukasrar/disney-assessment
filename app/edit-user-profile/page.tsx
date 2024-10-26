"use client";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Flex,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { states } from "../helpers/states";
import { disneylands } from "../helpers/disneylands";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [cookies, setCookie] = useCookies(["userProfile"]);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      city: "",
      state: "",
      favoriteCharacter: "",
      favoriteMovie: "",
      favoriteDisneyland: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required."),
      lastName: Yup.string().required("Last name is required."),
      birthDate: Yup.date().required("Birth date is required."),
    }),
    onSubmit: (values) => {
      const updatedProfile = {
        ...values,
        updatedAt: new Date().toLocaleString(),
      };

      setCookie("userProfile", updatedProfile);
      router.push("/user-profile");
    },
  });

  useEffect(() => {
    if (cookies.userProfile) {
      const userProfile = cookies.userProfile;
      formik.setValues({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        birthDate: userProfile.birthDate || "",
        city: userProfile.city || "",
        state: userProfile.state || "",
        favoriteCharacter: userProfile.favoriteCharacter || "",
        favoriteMovie: userProfile.favoriteMovie || "",
        favoriteDisneyland: userProfile.favoriteDisneyland || "",
      });
    }
  }, [cookies.userProfile]);

  return (
    <Box
      bg={"surface"}
      p={{ base: "10px 20px 20px", md: "40px 80px 80px" }}
      w={"100%"}
    >
      <form onSubmit={formik.handleSubmit}>
        <Flex flexDir={"column"} gap={"15px"}>
          <Flex gap={"15px"}>
            <FormControl isInvalid={!!formik.errors.firstName}>
              <FormLabel>
                First Name
                <Text as={"span"} color={"#FF0004"}>
                  *
                </Text>
              </FormLabel>
              <Input
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!formik.errors.lastName}>
              <FormLabel>
                Last Name
                <Text as={"span"} color={"#FF0004"}>
                  *
                </Text>
              </FormLabel>
              <Input
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl
            isInvalid={!!formik.errors.birthDate}
            w={"calc(50% - 5px)"}
          >
            <FormLabel>
              Birth Date
              <Text as={"span"} color={"#FF0004"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="date"
              name="birthDate"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormErrorMessage>{formik.errors.birthDate}</FormErrorMessage>
          </FormControl>

          <Flex gap={"15px"}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>State</FormLabel>
              <Select
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
              >
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel>Favorite Disney Character</FormLabel>
            <Input
              name="favoriteCharacter"
              value={formik.values.favoriteCharacter}
              onChange={formik.handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Favorite Disney Movie</FormLabel>
            <Input
              name="favoriteMovie"
              value={formik.values.favoriteMovie}
              onChange={formik.handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Favorite Disneyland</FormLabel>
            <Select
              name="favoriteDisneyland"
              value={formik.values.favoriteDisneyland}
              onChange={formik.handleChange}
            >
              {disneylands.map((disneyland) => (
                <option key={disneyland.value} value={disneyland.label}>
                  {disneyland.label}
                </option>
              ))}
            </Select>
          </FormControl>

          <Flex gap={"10px"}>
            <Button bg={"primary"} color={"surface"} type="submit">
              Update Profile
            </Button>
            <Button
              bg={"surface"}
              color={"primary"}
              variant={"outline"}
              border={"2px solid"}
              onClick={() => {
                router.push("/user-profile");
              }}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
};

export default UserProfile;
