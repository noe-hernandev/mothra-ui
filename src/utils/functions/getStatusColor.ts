import { STATUS_COLORS } from "../enums/StatusColors";
import type { StatusTag } from "../interfaces/Tag";
import type { Hex } from "../types/Hex";

export const getStatusColor = (status: StatusTag): Hex => {
    switch (status) {
        case "success":
            return STATUS_COLORS.SUCCESS;
        case "default":
            return STATUS_COLORS.DEFAULT;
        case "warning":
            return STATUS_COLORS.WARNING;
        case "error":
            return STATUS_COLORS.ERROR;
        default:
            return STATUS_COLORS.DEFAULT; // opción por defecto
    }
};
