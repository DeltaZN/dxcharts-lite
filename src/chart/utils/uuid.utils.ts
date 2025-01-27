/*
 * Copyright (C) 2002 - 2023 Devexperts LLC
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
export function uuid(): string {
	const chr4 = () => Math.random().toString(16).slice(-4);
	return `${chr4() + chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4() + chr4() + chr4()}`;
}
