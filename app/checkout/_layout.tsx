import AppBar from "@/components/app.bar";
import { Stack } from "expo-router";

export default function CheckoutLayout() {
    return (
        <>
            <AppBar />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    );
}