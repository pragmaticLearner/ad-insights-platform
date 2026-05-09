import { Checkbox } from "@chakra-ui/react";

interface Props {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export default function RememberMeCheckbox({ checked, onCheckedChange }: Props) {
    return (
        <Checkbox.Root
            checked={checked}
            onCheckedChange={(e) => onCheckedChange(!!e.checked)}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label> Remember Me?</Checkbox.Label>
        </Checkbox.Root>
    );
}
